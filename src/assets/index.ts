// Planets
import Earth from './planets/planet-earth.svg'
import EarthInternal from './planets/planet-earth-internal.svg'
import Jupiter from './planets/planet-jupiter.svg'
import JupiterInternal from './planets/planet-jupiter-internal.svg'
import Mars from './planets/planet-mars.svg'
import MarsInternal from './planets/planet-mars-internal.svg'
import Mercury from './planets/planet-mercury.svg'
import MercuryInternal from './planets/planet-mercury-internal.svg'
import Neptune from './planets/planet-neptune.svg'
import NeptuneInternal from './planets/planet-neptune-internal.svg'
import Saturn from './planets/planet-saturn.svg'
import SaturnInternal from './planets/planet-saturn-internal.svg'
import Uranus from './planets/planet-uranus.svg'
import UranusInternal from './planets/planet-uranus-internal.svg'
import Venus from './planets/planet-venus.svg'
import VenusInternal from './planets/planet-venus-internal.svg'

// Geology
import EarthGeology from "./geology/geology-earth.png"
import JupiterGeology from "./geology/geology-jupiter.png"
import MarsGeology from "./geology/geology-mars.png"
import MercuryGeology from "./geology/geology-mercury.png"
import NeptuneGeology from "./geology/geology-neptune.png"
import SaturnGeology from "./geology/geology-saturn.png"
import UranusGeology from "./geology/geology-uranus.png"
import VenusGeology from "./geology/geology-venus.png"

export default {
    planets: {
        earth: Earth,
        mars: Mars,
        jupiter: Jupiter,
        mercury: Mercury,
        neptune: Neptune,
        saturn: Saturn,
        uranus: Uranus,
        venus: Venus,

        internal: {
            earth: EarthInternal,
            mars: MarsInternal,
            jupiter: JupiterInternal,
            mercury: MercuryInternal,
            neptune: NeptuneInternal,
            saturn: SaturnInternal,
            uranus: UranusInternal,
            venus: VenusInternal
        }
    },
    geology: {
        earth: EarthGeology,
        jupiter: JupiterGeology,
        mars: MarsGeology,
        mercury: MercuryGeology,
        neptune: NeptuneGeology,
        saturn: SaturnGeology,
        uranus: UranusGeology,
        venus: VenusGeology
    }
}