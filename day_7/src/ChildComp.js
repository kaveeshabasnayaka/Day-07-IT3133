export default function ChildComp(props){
    return(
        <>
        <h2>Hello React I'm Child</h2>
        {
            props.setfun("My name is Bob")
        }
        </>
    )
} 