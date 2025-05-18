export default function DisplaySearchfood({ checkfood, searched }) {
  if (searched.length <= 1) return null;

  const name = checkfood?.name?.toLowerCase();
  const query = searched.toLowerCase();

  // Only render if the food name includes the search text
  if (!name?.includes(query)) return null;

  return (
    <>
      <div className="w-full flex justify-between mt-4 shadow-md rounded-xl p-2">  
        <div className="w-[70%]">          
          <h1 className="text-lg font-bold text-black">{checkfood.name}</h1>
          <p className="text-sm font-bold text-black mt-2 mb-2">
            {"₹" + ("defaultPrice" in checkfood ? checkfood?.defaultPrice / 100 : checkfood?.price / 100)}
          </p>
          
          {checkfood?.ratings?.aggregatedRating?.rating && (
            <span className="text-sm font-medium text-black">
              ★{checkfood.ratings.aggregatedRating.rating}
            </span>
          )}

          {checkfood?.ratings?.aggregatedRating?.ratingCountV2 && (
            <span className="text-sm font-medium text-black ml-2">
              ({checkfood.ratings.aggregatedRating.ratingCountV2})
            </span>
          )}

          <p className="text-sm text-black line-clamp-2">{checkfood?.description}</p>
        </div>

        <div className="w-[20%] relative">
          <img
            className="w-[80%] object-cover h-24 rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${checkfood?.imageId}`}
            alt={checkfood.name}
          /> 
          <button className="w-[60%] absolute bottom-2 right-8 left-5 items-center text-md font-bold shadow-md border-white rounded-xl text-green-600 px-4 py-2 bg-white transition-transform hover:bg-gray-300">
            ADD
          </button>
        </div>
      </div>
      <hr className="mb-4 mt-3" />
    </>
  );
}
