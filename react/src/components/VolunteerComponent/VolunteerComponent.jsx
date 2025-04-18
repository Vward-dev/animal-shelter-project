


export default function VolunteerComponent( {volunteer} ) {


    return (
        <div>
            <h1>{volunteer.firstName} {volunteer.lastName}</h1>
            <p>{volunteer.email}</p>
            <p>{volunteer.phone}</p>
            <p>{volunteer.bioDescription}</p>
        </div>
    )

}