const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ parts }) => parts.reduce((sum, parts) => sum + parts.exercises, 0)

const Content = ({ parts }) => {
    return (
        parts.map(parts =>
            <p key={parts.id}>
                {parts.name} {parts.exercises}
            </p>
        )
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <p><b>total of <Total parts={course.parts}/> exercises</b></p>
        </div>
    )
}

export default Course