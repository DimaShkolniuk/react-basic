import Counter from './components/Counter'
import MealList from './components/MealList'
import MealsProvider from './providers/MealsProvider'

const Start = () => {
  return (
    <div>
      <MealsProvider>
        <Counter />
        <MealList />
      </MealsProvider>
    </div>
  )
}
export default Start
