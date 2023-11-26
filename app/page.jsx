

export default function Home() {
  return (
    <main className="container m-auto">
      <h1 className="text-center mt-5 text-2xl font-semibold">Home</h1>

      <div className="flex justify-center items-center gap-3 mt-5 flex-wrap">
        <h1>Daily Goals</h1>
      <span className="p-2 bg-cyan-600 text-white font-semibold rounded-xl">Drink atleast 3 litre of Water</span>
      <span className="p-2 bg-red-600 text-white font-semibold rounded-xl">Workout: walk, strech & yoga</span>
      <span className="p-2 bg-green-600 text-white font-semibold rounded-xl">eat healthy foods</span>
      </div>
      
      
    </main>
  )
}
