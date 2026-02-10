import { List, Spin } from "antd";
import { useEffect, useRef } from "react";
import { usePokemonStore } from "../store/pokemonStore";
import { PokemonCard } from "../components/PokemonCard";

export const PokemonList = () => {
  const { pokemons, loadMore, isLoading } = usePokemonStore();
  const loaderRef = useRef(null);

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <>
      <div style={{ maxWidth: "100%", overflowX: "hidden", padding: '10px 30px'}}>
        <List
           grid={{
            gutter: 20,
            xs: 1,
            sm: 2,  
            md: 3,  
            lg: 4,  
            xl: 4,
            xxl: 5,
          }}
         
          dataSource={pokemons}
          renderItem={(p) => (
            <List.Item>
              <PokemonCard pokemon={p} />
            </List.Item>
          )}
        />
      </div>

      <div ref={loaderRef} style={{ textAlign: "center", padding: 20 }}>
        {isLoading && <Spin />}
      </div>
    </>
  );
};
