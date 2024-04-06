import Particles from "react-tsparticles"
import particlesCofig from "../../particles-cofig"
export default function ParticleBackground() {
    return (
        <Particles params={particlesCofig} style={{ position: "absolute", width: "100%", height: "100%", zIndex: -1 }}>
            
        </Particles>
    )
}