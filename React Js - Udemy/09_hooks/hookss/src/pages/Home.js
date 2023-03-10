// useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseRef from '../components/HookUseRef'
import HookUseCallBack from '../components/HookUseCallBack'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustomHook from '../components/HookCustomHook'

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do contexto: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallBack />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustomHook />
    </div>
  )
}

export default Home