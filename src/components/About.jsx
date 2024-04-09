export const About = props => {
    return (
        <section id="about">
            <h1 className="text-xl font-bold text-center">Welcome to my F1 Application!</h1>
            <h2 className="text-center">Author: Gareth Carvalho</h2>
            <a href="https://github.com/garethcarvalho/web3-asg2" className="text-blue-500 underline text-center hover:text-blue-600">Repository Link</a>
            <p>This is a small little Single-Page React Application that intefaces with a small F1 database that is hosted on supabase. The idea was to implement
                a frontend (made in React) to interface with a backend we had previously made.
            </p>
        </section>
    )
}