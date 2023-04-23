import React from 'react'
import { Modal as ExternalModal } from 'react-bootstrap'
import { useAppTranslate } from '../../../Hooks/Platform/AppTranslate'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { PrimaryOutlinedButton } from '../Button/PrimaryOutlinedButton'
import { PrimaryButton } from '../Button/PrimaryButton'

function Modal({
    onCancel,
    onConfirm,
    title,
    message,
    confirmText,
    cancelText,
    show,
    buttons = undefined,
    includeDefaultButtons = true,
    children,
    titleComponent,
    footerComponent,
    size,
    closeButton = true,
    includeFooter = true,
    backdrop = true,
    scrollable = true,
}) {
    const [trans] = useAppTranslate()

    function header() {
        if (title) {
            return (
                <>
                    <ExternalModal.Header>
                        <ExternalModal.Title>{title}</ExternalModal.Title>

                        <IconButton onClick={onCancel}>
                            <CloseIcon />
                        </IconButton>
                    </ExternalModal.Header>
                </>
            )
        }

        if (titleComponent) {
            return (
                <ExternalModal.Header>
                    {titleComponent}

                    <IconButton onClick={onCancel}>
                        <CloseIcon />
                    </IconButton>
                </ExternalModal.Header>
            )
        }
    }

    function body() {
        if (message) {
            return (
                <>
                    <ExternalModal.Body>
                        <p>{message}</p>
                    </ExternalModal.Body>
                </>
            )
        } else if (children) {
            return (
                <>
                    <ExternalModal.Body className={includeFooter ? 'mb-5' : ''}>
                        {children}
                    </ExternalModal.Body>
                </>
            )
        }
    }

    function footer() {
        if (footerComponent && includeFooter) {
            return footerComponent
        }

        if (includeFooter) {
            return (
                <div
                    className="d-flex flex-row justify-content-between p-3"
                    style={{ width: '100%' }}>
                    {includeDefaultButtons && (
                        <>
                            <PrimaryOutlinedButton onClick={onCancel}>
                                {cancelText || trans('base.cancel')}
                            </PrimaryOutlinedButton>
                            <PrimaryButton onClick={onConfirm}>
                                {confirmText || trans('base.confirm')}
                            </PrimaryButton>
                        </>
                    )}
                    {buttons ? buttons : null}
                </div>
            )
        }
    }

    return (
        <>
            <ExternalModal
                centered
                onHide={onCancel}
                show={show}
                size={size}
                backdrop={backdrop}
                scrollable={scrollable}>
                {header()}

                {body()}

                {footer()}
            </ExternalModal>
        </>
    )
}

export default Modal
