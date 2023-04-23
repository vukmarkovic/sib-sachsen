import BubbleUI from 'react-bubble-ui'
import 'react-bubble-ui/dist/index.css'
import './styles.css'
import { Badge } from '@mui/material'

export function BubbleChart({ data, onClick, onBadgeClicked, scale = 1 }) {
    const options = {
        size: 150,
        minSize: 40,
        gutter: 15,
        provideProps: true,
        numCols: 3,
        fringeWidth: 150,
        yRadius: 130,
        xRadius: 220,
        cornerRadius: 50,
        showGuides: false,
        compact: true,
        gravitation: 1,
    }

    function mapValue(value) {
        return options.size
    }

    const children = data
        .map((data, i) => {
            if (data?.value === 0) {
                return null
            }
            return (
                <Child
                    data={data}
                    className="child"
                    key={i}
                    mapValue={mapValue}
                    onBadgeClicked={onBadgeClicked}
                    scale={scale}
                    setClick={onClick}
                />
            )
        })
        .filter(Boolean)

    return (
        <BubbleUI options={options} className="myBubbleUI">
            {children}
        </BubbleUI>
    )
}

function Child({ data, setClick, onBadgeClicked, mapValue }) {
    const size = mapValue(mapValue)

    function onClick(e) {
        if (e.target.tagName === 'DIV') {
            setClick(data)
        } else {
            onBadgeClicked(data)
        }
    }

    function divComponent() {
        return (
            <div
                style={{ width: size + 'px', height: size + 'px' }}
                className="childComponent">
                {data?.icon}
            </div>
        )
    }

    function body() {
        if (onBadgeClicked) {
            return (
                <Badge
                    badgeContent={'+' + data?.value}
                    color={'primary'}
                    overlap={'circular'}
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => onClick(e)}>
                    {divComponent()}
                </Badge>
            )
        }
        return <>{divComponent()}</>
    }

    return <>{body()}</>
}
