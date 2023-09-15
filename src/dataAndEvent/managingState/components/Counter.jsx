import { useMealListContext } from '../providers/MealsProvider'

const Counter = () => {
  const { meal } = useMealListContext()

  return (
    <>
      <h3>Number of meals today: {meal.length}</h3>
    </>
  )
}
export default Counter
