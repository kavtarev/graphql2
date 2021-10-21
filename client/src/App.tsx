import './App.css'
import { InputBehaviour } from './Input/InputBehavior'
import { InputWithChoiceBehaviour } from './InputWithChoice/InputWithChoiceBehavior'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom'

import { NewInputWithTagsBehaviour } from './NewInputWithTags/NewInputWithTagsBehaviour'
import { CoversComponentsBehaviour } from './CoversComponents/CoversComponentsBehaviour'
import { SettingsComponentsBehaviour } from './SettingsComponents/SettingsComponentsBehaviour'

let items = [
    'ab',
    'aa',
    'asd',
    'asds',
    'asdfge',
    'aaaaa',
    'abdfg',
    'bfd',
    'bdsf',
    'hfgfdg',
    'dfg',
    'sdf',
    'sdfsdfsd',
]

// mutation can be named whatever???

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Основое</Link>
                    </li>
                    <li>
                        <Link to="/covers">Обложки</Link>
                    </li>
                    <li>
                        <Link to="/settings">Настройки</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/covers">
                    <CoversComponentsBehaviour />
                </Route>
                <Route path="/settings">
                    <SettingsComponentsBehaviour />
                </Route>
                <Route path="" exact>
                    <div className="App">
                        <div className="forinput">
                            <InputBehaviour
                                title="Заголовок"
                                error={false}
                                isRequired={false}
                                characterLimit={50}
                            />
                            <InputBehaviour
                                title="Подзаголовок"
                                error={false}
                                isRequired={true}
                                characterLimit={70}
                            />
                            <InputBehaviour
                                title="Title SEO"
                                error={false}
                                isRequired={false}
                            />
                            <InputWithChoiceBehaviour
                                items={items}
                                title="автор"
                            />
                            <NewInputWithTagsBehaviour
                                title={'добавить тэги'}
                                items={items}
                            />
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
