const Card = (props) => {
  const {robotinfo} = props;
  // console.log(robotinfo);
  const {name,email,username,id} = robotinfo;
  return (
    <>
      <div className='tc grow bg-light-pink br3 pa3 ma2 dib bw2 shadow-5'>
        <img src={`https://robohash.org/${id}/?size=250x250`} alt='robot' />
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
          <p>{username}</p>
        </div>
      </div>
    </>
  )
}
export default Card;
