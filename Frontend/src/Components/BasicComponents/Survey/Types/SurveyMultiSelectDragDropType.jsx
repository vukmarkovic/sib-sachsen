import React, { useEffect, useState } from 'react'
import { DropContainer } from '../../DnD/DropContainer'
import { List } from '../../List/List'
import { DraggableContainer } from '../../DnD/DraggableContainer'
import Card from '../../Card/Card'
import { DragDropContext } from '../../DnD/DragDropContext'
import { Box, Chip } from '@mui/material'
import { capitalizeFirst } from '@amcharts/amcharts5/.internal/core/util/Utils'
import { convertKey } from '../../../../Services/Utils/SurveyUtil'
import { copyObject } from '../../../../Services/Utils/Util'

const defaultListId = 'defaultList'

export function SurveyMultiSelectDragDropType({
    question,
    onValueChosen,
    answers,
}) {
    const [items, setItems] = useItems({ question, answers })

    const [lists, onDrop] = useLists({ question, answers, onValueChosen })

    function listContainersComponent() {
        return (
            <div className={'d-flex flex-row w-100'}>
                {(lists || []).map(({ label, values, key }, index) => {
                    return (
                        <div className={'flex-grow-1 mx-1'}>
                            <DropContainer
                                includeDropPlaceholder={false}
                                ignoreContainerClipping={true}
                                id={key}>
                                <Card style={{ height: '300px' }}>
                                    <h6
                                        style={{
                                            color: question?.color
                                                ? `var(--${question?.color[index]})`
                                                : '',
                                        }}>
                                        {capitalizeFirst(label)}
                                    </h6>
                                    <Box
                                        className={
                                            'd-flex flex-row flex-wrap w-100'
                                        }>
                                        {(values || [])?.map((value, index) =>
                                            itemComponent(value, index)
                                        )}
                                    </Box>
                                </Card>
                            </DropContainer>
                        </div>
                    )
                })}
            </div>
        )
    }

    function itemComponent(item, index) {
        return (
            <div>
                <DraggableContainer id={item.key} index={index}>
                    <Chip
                        variant={'outlined'}
                        label={capitalizeFirst(item?.label || '')}
                        color={'secondary'}
                        className={'mx-1 my-1'}
                    />
                </DraggableContainer>
            </div>
        )
    }

    function itemsContainerComponent() {
        return (
            <div className="w-100 mb-4">
                <DropContainer
                    includeDropPlaceholder={false}
                    id={defaultListId}>
                    <Box className={'d-flex flex-row flex-wrap w-100'}>
                        {(items || []).map((item, index) =>
                            itemComponent(item, index)
                        )}
                    </Box>
                </DropContainer>
            </div>
        )
    }

    function body() {
        return (
            <DragDropContext
                onDragEnd={(result) => {
                    onDrop(result, items, setItems)
                }}>
                <div className={'d-flex flex-column flex-wrap'}>
                    {itemsContainerComponent()}

                    {listContainersComponent()}
                </div>
            </DragDropContext>
        )
    }

    return <>{body()}</>
}

function useItems({ question, answers }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!question?.answers) {
            setItems([])
            return
        }

        let newItems = createFromQuestion(question)

        newItems = importAnswers(question, answers, newItems)

        setItems(newItems)
    }, [])

    function createFromQuestion(question) {
        return (Object.entries(question.answers) || []).map(
            ([key, label], index) => {
                return { label, key }
            }
        )
    }

    function importAnswers(question, answers, newItems) {
        const convertedKey = convertKey(question.key)
        const newItemsCopy = []

        if (!answers[convertedKey]?.items) {
            return newItems
        }

        const answerItemsKeys = answers[convertedKey].items.map(
            (item) => item.key
        )

        for (let item of newItems) {
            if (answerItemsKeys.includes(item.key)) {
                newItemsCopy.push(item)
            }
        }
        return newItemsCopy
    }

    return [items, setItems]
}

function useLists({ question, answers, onValueChosen }) {
    const [lists, setLists] = useState([])

    useEffect(() => {
        if (!question?.answers) {
            setLists([])
            return
        }

        let newLists = createFromQuestion(question)

        newLists = importAnswers(question, answers, newLists)

        setLists(newLists)
    }, [])

    function createFromQuestion(question) {
        return (Object.entries(question.answers2) || []).map(
            ([key, label], index) => {
                return { key, label, values: [] }
            }
        )
    }

    function importAnswers(question, answers, lists) {
        const convertedKey = convertKey(question.key)

        if (!answers[convertedKey]?.lists) {
            return lists
        }

        for (let answerList of answers[convertedKey].lists) {
            let list = lists.find((list) => list.key === answerList?.key)
            if (!list) {
                continue
            }
            list.values = answerList?.values
        }

        return lists
    }

    function onDrop({ draggableId, source, destination }, items, setItems) {
        const listsCopy = copyObject(lists)
        const itemsCopy = copyObject(items)

        const sourceId = source?.droppableId
        const destinationId = destination?.droppableId

        if (!destination || destination.droppableId === source.droppableId) {
            if (sourceId === 'defaultList') {
                return
            }
            // Reorder same list
            const sourceIndex = source.index
            const destinationIndex = destination?.index

            const listCopy = listsCopy.find(
                (list) => list.key === sourceId
            )?.values

            //swap
            if (sourceIndex !== destinationIndex && listCopy) {
                const item = listCopy[sourceIndex]
                listCopy.splice(sourceIndex, 1)
                listCopy.splice(destinationIndex, 0, item)
            }
        } else if (sourceId === defaultListId) {
            // Moving from default list to other list
            const destinationList = listsCopy.find(
                (list) => list.key === destinationId
            )

            const item = itemsCopy.find((item) => item.key === draggableId)

            destinationList.values.push(item)

            itemsCopy.splice(itemsCopy.indexOf(item), 1)
        } else if (destinationId === defaultListId) {
            // Moving from one list to default list
            const sourceList = listsCopy.find((list) => list.key === sourceId)

            const item = sourceList.values.find(
                (item) => item.key === draggableId
            )

            itemsCopy.push(item)

            sourceList.values.splice(sourceList.values.indexOf(item), 1)
        } else {
            // Moving from one list to another list
            const sourceList = listsCopy.find((list) => list.key === sourceId)

            const destinationList = listsCopy.find(
                (list) => list.key === destinationId
            )

            const item = sourceList.values.find(
                (item) => item.key === draggableId
            )

            destinationList.values.push(item)

            sourceList.values.splice(sourceList.values.indexOf(item), 1)
        }

        setLists(listsCopy)

        setItems(itemsCopy)

        onValueChosen(question, {
            items: itemsCopy,
            lists: listsCopy,
        })
    }

    return [lists, onDrop]
}
