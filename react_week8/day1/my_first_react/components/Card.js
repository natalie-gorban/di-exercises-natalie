const Card = (props) => {
  const {robotinfo} = props;
  console.log(robotinfo);
  const {name, email, sername, id} = robotinfo;
  return (
    <>
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={`https://robohash.org/${id}/?size=200x200`} alt='robot' />
        <div>
          <h2>{robotinfo.name}</h2>
          <p>{email}</p>
          <p>{username}</p>
        </div>
      </div>
    </>
  )
}
export default Card;
