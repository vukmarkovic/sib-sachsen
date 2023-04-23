import { Helmet } from 'react-helmet'
import { useTheme } from '../../../Hooks/Redux/Theme'
import { FAV_ICON_PATH } from '../../../Config/Constants'

const AppHead = () => {
    const [currentTheme, setCurrentTheme] = useTheme()

    function getThemePath() {
        return '/assets/css/' + currentTheme + '.css'
    }

    function favIconLinkComponent() {
        // Can override the default favicon by setting the FAV_ICON_PATH constant
        return <link rel="icon" href={FAV_ICON_PATH} type="image/png" />
    }

    return (
        <Helmet>
            {/* <link rel="stylesheet" href={getThemePath()}></link> (we only use our default theme, see index.html)*/}
            {favIconLinkComponent()}
        </Helmet>
    )
}

export default AppHead
