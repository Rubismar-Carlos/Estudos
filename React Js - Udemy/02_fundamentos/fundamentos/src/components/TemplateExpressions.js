const TemplateExpressions = () => {

    const name = 'Rubens';
    const data = {
        age: 23,
        job: 'Progammer',
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Você atua como: {data.job} e tem {data.age} anos de idade. </p>
            <p>{4 + 4}</p>
        </div>
    )
}

export default TemplateExpressions;