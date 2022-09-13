import React from 'react'
type props = {
    close: () => void
    openFlg:boolean
}
const Sidebar: React.FC<props> = props => {
    const style: React.CSSProperties = {display: props.openFlg ? 'block' : 'none' }
    return (
        <div style={ style }>
        <button onClick={props.close}>test</button>
            <h1>サイドバー</h1>
            </div>
    )
}
export default Sidebar