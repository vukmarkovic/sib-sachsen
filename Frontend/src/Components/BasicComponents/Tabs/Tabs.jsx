import React from 'react'
import { Tabs as ExternalTabs } from '@mui/material'
import { TabLabel } from './TabLabel'
import { TabPanel } from './TabPanel'
import Card from '../Card/Card'
import { styled } from '@mui/material/styles'

export function Tabs({
    className = '',
    style,
    onChange,
    onClick,
    value,
    labels,
    components,
    ...props
}) {
    const TabLabelStyled = styled(TabLabel)({
        textTransform: 'none',
    })

    return (
        <>
            <Card className={className}>
                <ExternalTabs
                    value={value}
                    onChange={onChange}
                    sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {(labels || []).map((label, index) => {
                        return (
                            <TabLabelStyled
                                tabtype={value}
                                onClick={(e) => onClick(e)}
                                key={index}
                                label={label}
                            />
                        )
                    })}
                </ExternalTabs>
                {(components || []).map((component, index) => {
                    return (
                        <TabPanel
                            className={'w-100'}
                            key={index}
                            value={value}
                            index={index}>
                            {component}
                        </TabPanel>
                    )
                })}
            </Card>
        </>
    )
}
