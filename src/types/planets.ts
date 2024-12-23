type planetsTS = {
    mercury: planet;
    venus: planet;
    earth: planet;
    mars: planet;
    jupiter: planet;
    saturn: planet;
    uranus: planet;
    neptune: planet;
}

export interface planet {
    name: string,
    color: string,
    overview: {
      content: string;
      source: string
    },
    structure: {
      content: string;
      source: string
    },
    geology: {
      content: string
      source: string
    },
    rotation: string
    revolution: string
    radius: string
    temperature: string
    images: {
      planet: string
      internal: string
      geology: string
    }
}

export default planetsTS