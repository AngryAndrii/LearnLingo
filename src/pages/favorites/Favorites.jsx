const Favorites = () => {
  let favorites = [];

  return (
    <>
      {favorites.length === 0 ? (
        <h1>Favorite list is empty</h1>
      ) : (
        <>It iS favotites list</>
      )}
    </>
  );
};

export default Favorites;
