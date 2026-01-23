  // pages/PokemonList.jsx
  import { List, Spin } from "antd"
  import { useEffect, useRef } from "react"
  import { usePokemonStore } from "../store/pokemonStore"
  import { PokemonCard } from "../components/PokemonCard"

  export const PokemonList = () => {
    const { pokemons, loadMore, isLoading } = usePokemonStore()
    const loaderRef = useRef(null)

    useEffect(() => {
      loadMore()
    }, [])

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            loadMore()
          }
        },
        { threshold: 1 }
      )

      if (loaderRef.current) {
        observer.observe(loaderRef.current)
      }

      return () => observer.disconnect()
    }, [loadMore])

    return (
      <>
    
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={pokemons}
          renderItem={(p) => (
            <List.Item>
              <PokemonCard pokemon={p} />
            </List.Item>
          )}
        />

        <div ref={loaderRef} style={{ textAlign: "center", padding: 20 }}>
          {isLoading && <Spin />}
        </div>
      </>
    )
  }
