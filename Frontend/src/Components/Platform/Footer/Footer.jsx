import React, { useState } from 'react'
import { useTheme } from '../../../Hooks/Redux/Theme'
import { getYear } from '../../../Services/Utils/DateUtil'
import { getCurrentAPIBasePath } from '../../../Services/BasePathService'

const Sidebar = () => {
    const [currentTheme, setCurrentTheme] = useTheme()

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            {/* Footer */}
            <div
                className="py-3 mt-5 px-5"
                id="footer-main"
                style={{ zIndex: 0 }}
            >
                <div className="row text-center text-sm-left align-items-sm-center">
                    <div className="col-sm-4 d-flex flex-row nav justify-content-start">
                        <p className="text-sm mb-0">
                            © {getYear()}&nbsp;
                            <a
                                href={getCurrentAPIBasePath()}
                                className="h6 text-sm"
                                target="_blank"
                                rel="noreferrer"
                            >
                                soft.fact
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar
