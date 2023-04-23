import React, { useEffect, useRef, useState } from 'react'
import { useLoader } from '../../../Hooks/Platform/Loader'
import { useLanguage } from '../../../Hooks/Redux/Language'
import { useAppNavigate } from '../../../Hooks/Routing/AppNavigate'
import {
    extractContent,
    onFormSubmit,
    onWrapperClick,
} from '../../../Services/Utils/WrapperUtil'
import { loadComponent } from '../../../Api/Services/ComponentAPIService'
import { AppInnerHTML } from './AppInnerHTML'
import { dispatchReactEvent } from '../../../Services/Utils/Util'

export function LaravelComponentWrapper({
    componentName,
    id,
    className,
    skeleton,
    ...props
}) {
    const [contentHtml, setContentHtml] = useState(null)

    const { loadRequest } = useLoader()

    const [currentLanguage] = useLanguage()

    const { navigate } = useAppNavigate()

    const ref = useRef(null)

    useEffect(() => {
        loadRequest(doLoadComponent)
    }, [componentName, currentLanguage])

    useEffect(() => {
        if (ref.current) {
            dispatchReactEvent('htmlReady', { target: ref.current })
        }
    }, [contentHtml])

    // TODO @Stefan Add reloadHtml event handler?

    async function doLoadComponent() {
        try {
            await getContent()
        } catch (e) {}
    }

    async function getContent() {
        if (componentName) {
            //try catch
            const response = await loadComponent(componentName, props)

            if (response?.data) {
                setContentHtml(extractContent(response))
            }
        }
    }

    function body() {
        // if (!contentHtml) {
        //     if (skeleton) {
        //         return skeleton;
        //     }
        //     return (<>
        //         <Skeleton variant="rectangular" width={1000} height={200}/>
        //     </>)
        // }

        return (
            <>
                <div ref={ref} className={className}>
                    <AppInnerHTML
                        id={id}
                        onSubmit={(e) => onFormSubmit(e, navigate)}
                        onClick={(e) => onWrapperClick(e, navigate)}
                        html={contentHtml}
                    />
                </div>
            </>
        )
    }

    return <>{body()}</>
}
