export default function Skills() {

    const skills = ["HTML", "CSS", "JAVASCRIPT", "WORDPRESS", "HOSTING", "VIDEO EDITING", "GRAPHICS DESIGN"];

    const skillList = skills.map((skill, i) => {
        return <li key={i}>{skill}</li>
    })

    return (
       <div className="skill-list">
            <ul>
                {skillList}
            </ul>
        </div>
    )
}