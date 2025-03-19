import Message from "../layout/Message"
import {useLocation} from 'react-router-dom'

function Projects(){
    const location = useLocation()
    let message = ''
    let type = ''

    if (location.state) {
        message = location.state.message
        type = location.state.type || 'success'
    }

    return (
        <div>
            <h1>Meus projetos</h1>
            {message && <Message type={type} msg={message} />}
        </div>
    )
}

export default Projects