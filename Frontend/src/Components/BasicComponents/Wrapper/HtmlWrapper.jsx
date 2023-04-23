import React, { useEffect, useRef, useState } from 'react'
import { getComponent } from '../../../Api/Services/ComponentAPIService'
import { useLoader } from '../../../Hooks/Platform/Loader'
import { useLanguage } from '../../../Hooks/Redux/Language'
import { useAppNavigate } from '../../../Hooks/Routing/AppNavigate'
import {
    addReactEventListener,
    dispatchReactEvent,
    removeReactEventListener,
} from '../../../Services/Utils/Util'
import {
    extractContent,
    onFormSubmit,
    onWrapperClick,
} from '../../../Services/Utils/WrapperUtil'
import { AppInnerHTML } from './AppInnerHTML'

// TODO (Low Prio) Change type to path or url
const HtmlWrapper = ({ type, isHomepage = false, isProfile = false }) => {
    const [contentHtml, setContentHtml] = useState(null)
    const [url, setUrl] = useState(null)
    const [reloadCount, setReloadCount] = useState(0)

    const { loadRequest } = useLoader()

    const [currentLanguage] = useLanguage()

    const { navigate } = useAppNavigate()

    const ref = useRef(null)

    // TODO (Low Prio) @Stefan @Sherif Improve?
    useEffect(() => {
        const listener = (e) => {
            reloadHtml()
        }
        addReactEventListener('reloadHtml', listener)
        return () => {
            removeReactEventListener('reloadHtml', listener)
        }
    }, [])

    useEffect(() => {
        loadRequest(loadComponent)
    }, [type, currentLanguage, reloadCount])

    useEffect(() => {
        if (ref.current) {
            dispatchReactEvent('htmlReady', { target: ref.current })
        }
    }, [contentHtml])

    function reloadHtml() {
        // TODO (Maybe) Use (current) url instead of type
        setReloadCount(reloadCount + 1)
    }

    async function loadComponent() {
        try {
            await getContent(type)
        } catch (e) {
            if (e.response?.status === 401) {
                navigate('/login')
            }
        }
    }

    async function getContent(type) {
        if (type) {
            const response = await getComponent(type)
            setUrl(type)

            if (response?.data) {
                setContentHtml(extractContent(response, isHomepage, isProfile))
            }
        }
    }

    async function doSubmitForm(e) {
        const result = await onFormSubmit(e, navigate, isHomepage, setUrl)
        if (result) {
            setContentHtml(result)
        } else {
            reloadHtml()
        }
    }

    function body() {
        return (
            <>
                <div ref={ref}>
                    <AppInnerHTML
                        onSubmit={(e) => doSubmitForm(e)}
                        onClick={(e) => onWrapperClick(e, navigate)}
                        html={contentHtml}
                    />
                </div>
            </>
        )
    }

    return <>{body()}</>
}

export default HtmlWrapper
