function Search() {
  return (
    <div>
      {" "}
      <h3>
        Search by Name:
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </h3>
    </div>
  );
}

export default Search;
