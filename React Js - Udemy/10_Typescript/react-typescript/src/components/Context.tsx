// 11 - utilizando context

import { useContext } from 'react'

import { appContext } from '../App'

const Context = () => {

    const details = useContext(appContext)

  return (
    <>
    {details &&  (
        <div>
            <h2>Línguagem: {details.language}</h2>
            <h4>FrameWork: {details.framework}</h4>
            <p>Projetos: {details.projects}</p>
        </div>
    )}
    </>
  )
}

export default Context