import type { Route } from "./+types/list";

 const pokemons = [
    { id: 1, name: "이상해씨", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
    { id: 4, name: "파이리", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
    { id: 7, name: "꼬부기", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
    { id: 25, name: "피카츄", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
    { id: 39, name: "니드런♀", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png" },
    { id: 52, name: "니드런♂", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png" },
    { id: 133, name: "이브이", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
    { id: 150, name: "뮤츠", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" },
    { id: 151, name: "뮤", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" },
    { id: 152, name: "치코리타", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png" },
  ]

export function meta({}: Route.MetaArgs) {
  return [
    { title: "포켓몬" },
    { name: "description", content: "포켓몬 도감" },
  ];
}

// export default function List() {
//   return (
//     <div>
//       <h2>포켓몬 목록</h2>
//       <div>
//         {pokemons.map((pokemon) => (
//           <div key={pokemon.id}>
//             <img src={pokemon.image} alt={pokemon.name} />
//             <p>{pokemon.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function List() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* 제목 영역 */}
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
        ✨ 포켓몬 목록
      </h2>
      
      {/* 카드 그리드 컨테이너 */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {pokemons.map((pokemon) => (
          <div 
            key={pokemon.id} 
            className="group relative bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex flex-col items-center justify-between"
          >
            {/* 부드러운 배경이 들어간 이미지 영역 */}
            <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center p-2 mb-4 group-hover:bg-amber-50 transition-colors duration-300">
              <img 
                src={pokemon.image} 
                alt={pokemon.name} 
                className="w-4/5 h-4/5 object-contain transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            
            {/* 포켓몬 정보 영역 */}
            <div className="w-full text-center">
              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                #{String(pokemon.id).padStart(3, '0')}
              </span>
              <p className="text-lg font-bold text-gray-800 mt-1 group-hover:text-amber-600 transition-colors duration-200">
                {pokemon.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}