import Star from './Star'

export default function StarRating({
    selectedStars = 0,
    totalStars = 5,
    onRate = f => f
}) {
    const createArray = length => [...Array(length)];
    return (
        <>
            {createArray(totalStars).map((n,i) => (
                <Star 
                key={i} 
                selected={selectedStars > i}
                onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>rating: {selectedStars} out of {totalStars}</p>
        </>
    );
}