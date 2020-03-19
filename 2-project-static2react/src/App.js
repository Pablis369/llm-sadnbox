import React from 'react';
import Menu from "./Components/Menu";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1>SPOTIFY</h1>
            <Menu/>
        </header>
        <main className="row">
            <article className="col-md-12">
                <a href="#"><img src="img/PortadaReggaeton2019.jfif" height="180" width="240"/></a>
                <a href="#"><h4>Reggaeton Mix 2019 🔥 Novedades:¡Lo + Nuevo del Reggeaton!</h4></a>
                <p>Reggaeton Nuevo para tus fiestas, con los últimos lanzamientos de
                    Maluma, Nicky Jam, CNCO, Ozuna, Bad Bunny, BeckyG, Manuel Turizo...</p>
            </article>
            <article className="col-md-12">
                <a href="#"><img src="img/PortadaElectronica2019.jfif" height="180" width="240"/></a>
                <a href="#"><h4>Electrónica 2019 & Dance Music: La Mejor Música Electrónica</h4></a>
                <p>Música Electrónica de 2019: EDM HITS, Remixes y temazos para una Fiesta Total
                    con lo último de Calvin Harris, Martin Garrix, Dynoro, Avicii, Kygo, Alan Walker,
                    The Chainsmokers, Steve Aoki y muchos más.</p>
            </article>
            <article className="col-md-12">
                <a href="#"><img src="img/PortadaJazzPlaylist.jfif" height="180" width="240"/></a>
                <a href="#"><h4>Jazz Playlist</h4></a>
                <p>Enjoy the best of Jazz¡ Miles Davies, Billie Holiday, Herbie Hancock,
                    Dave Brubeck (Miles Davis).</p>
            </article>
            <article className="col-md-12">
                <a href="#"><img src="img/PortadaThisIsNe-YoPlaylist.jfif" height="180" width="240"/></a>
                <a href="#"><h4>This Is Ne-Yo</h4></a>
                <p>This is Ne-Yo. The essential tracks, all in one playlist.</p>
            </article>
        </main>
        <footer className="row">
            <div className="col-md-12">
                <p>Spotify by Pablis</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
