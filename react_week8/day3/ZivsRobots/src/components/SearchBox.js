const SearchBox = (props) => {
  const { onInputChange, onButtonClick} = props;
  return (
    <div className="pa2">
      <input type="text"
          placeholder="Search Robot..."
          className="pa3 ba b--green bg-lightest-blue"
          onChange={onInputChange}
      />
      <button className="pa3 ba" onClick={onButtonClick}>Search</button>
    </div>
  )
}
export default SearchBox
