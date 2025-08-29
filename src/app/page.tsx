
"use client";

import Image from "next/image";
import ServiceWorker from "../components/ServiceWorker";
import InstallPrompt from "../components/InstallPrompt";
import { FaMobileAlt, FaTabletAlt, FaTv, FaDesktop, FaCheckCircle } from "react-icons/fa";
// import ParticlesBG from "../components/ParticlesBG";

export default function Home() {
	return (
		<>
			<ServiceWorker />
									<div
										style={{
											minHeight: "100vh",
											width: "100vw",
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											position: "relative",
											overflow: "hidden",
											background: "radial-gradient(ellipse at 50% 0%, #232b3a 0%, #0b0b0b 100%)",
										}}
										aria-label="Landing principal GeoFiber TV"
									>
						{/* Fondo animado con gradiente y glow */}
										{/* Fondo animado con gradiente y partículas sutiles */}
										<div style={{
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											zIndex: 0,
											pointerEvents: "none",
											background: "radial-gradient(circle at 50% 20%, #38bdf833 0%, transparent 70%)"
										}} />
												{/* Partículas animadas sutiles (sin error de hidratación) */}
{/* ParticlesBG component is missing */}
								<div
									className="glass-card"
									style={{
										position: "relative",
										zIndex: 1,
										maxWidth: 420,
										width: "100%",
										padding: "2.5rem 1.5rem",
										borderRadius: "2.5rem",
										boxShadow: "0 8px 40px 0 #2563eb33, 0 1.5px 8px 0 #38bdf822",
										border: "1.5px solid #38bdf822",
										background: "rgba(24,31,42,0.92)",
										backdropFilter: "blur(18px)",
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: "2.2rem"
									}}
									aria-label="Tarjeta principal GeoFiber TV"
								>
							{/* Logo con glow animado */}
																<Image
																	src="/icons/GEOFIBERLOGO.png"
																	alt="GeoFiber TV logo"
																	width={140}
																	height={140}
																	style={{
																		objectFit: "contain",
																		background: "transparent",
																		filter: "drop-shadow(0 0 24px #38bdf8cc)",
																		maxWidth: "100%",
																		maxHeight: "100%"
																	}}
																	priority
																/>
													<h1 className="title-main" style={{ fontSize: "2.3rem", fontWeight: 900, color: "#38bdf8", textShadow: "0 2px 24px #2563eb55" }}>GeoFiber TV</h1>
													{/* Badge PWA */}
													<div style={{
														display: "inline-flex",
														alignItems: "center",
														gap: 6,
														background: "rgba(56,189,248,0.12)",
														color: "#38bdf8",
														fontWeight: 600,
														fontSize: 13,
														borderRadius: 12,
														padding: "2px 12px 2px 8px",
														marginBottom: 8,
														marginTop: -8,
														boxShadow: "0 1px 6px 0 #38bdf822"
													}}>
														<FaCheckCircle style={{marginRight: 4, fontSize: 15}} /> Instalable como app
													</div>
																<div className="subtitle" style={{ fontSize: "1.18rem", color: "#ededed", marginBottom: 0, textAlign: "center", lineHeight: 1.5 }}>
																	Acceso rápido, <span style={{ color: "#2563eb", fontWeight: 600 }}>moderno</span> y seguro a tu TV digital
																</div>
																<div style={{
																	background: "rgba(37,99,235,0.13)",
																	color: "#2563eb",
																	border: "1.5px solid #2563eb33",
																	borderRadius: 12,
																	padding: "10px 18px",
																	margin: "10px 0 0 0",
																	fontWeight: 600,
																	fontSize: 15,
																	textAlign: "center",
																	boxShadow: "0 2px 12px 0 #2563eb22"
																}}>
																	<span role="img" aria-label="wifi"></span> <b>Importante:</b> Para ver <u>todos los canales</u> debes estar conectado a la red WiFi de <b>GeoFiber</b>.
																</div>
													{/* Beneficios */}
													<ul style={{
														listStyle: "none",
														padding: 0,
														margin: "0 0 1.2rem 0",
														display: "flex",
														flexDirection: "column",
														gap: 8,
														alignItems: "flex-start"
													}}>
														<li style={{display: "flex", alignItems: "center", gap: 8, color: "#b3b3b3", fontSize: 15}}><FaCheckCircle style={{color: "#38bdf8"}}/> Sin cortes ni interrupciones</li>
														<li style={{display: "flex", alignItems: "center", gap: 8, color: "#b3b3b3", fontSize: 15}}><FaCheckCircle style={{color: "#38bdf8"}}/> Compatible con todos tus dispositivos</li>
														<li style={{display: "flex", alignItems: "center", gap: 8, color: "#b3b3b3", fontSize: 15}}><FaCheckCircle style={{color: "#38bdf8"}}/> Acceso instantáneo y seguro</li>
													</ul>
													{/* Iconos de dispositivos */}
													<div style={{display: "flex", gap: 18, marginBottom: 12, justifyContent: "center"}} aria-label="Dispositivos compatibles">
														<FaMobileAlt style={{fontSize: 26, color: "#38bdf8"}} title="Móvil"/>
														<FaTabletAlt style={{fontSize: 26, color: "#38bdf8"}} title="Tablet"/>
														<FaTv style={{fontSize: 26, color: "#38bdf8"}} title="TV"/>
														<FaDesktop style={{fontSize: 26, color: "#38bdf8"}} title="PC"/>
													</div>
													<button
														className="super-btn"
														style={{
															background: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
															fontSize: "1.25rem",
															fontWeight: 800,
															padding: "1.1rem 2.8rem",
															borderRadius: "2rem",
															boxShadow: "0 4px 32px 0 #2563eb33, 0 1.5px 8px 0 #38bdf822",
															marginTop: 8,
															marginBottom: 0,
															transition: "transform 0.18s, box-shadow 0.18s, background 0.18s",
															outline: "none",
															border: "none",
															color: "#fff",
															letterSpacing: "0.01em"
														}}
														onClick={() => window.location.replace('https://fastv.geofiber.com.ar')}
														onMouseOver={e => e.currentTarget.style.background = "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)"}
														onMouseOut={e => e.currentTarget.style.background = "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)"}
														aria-label="Entrar a la TV"
													>
														Entrar a la TV
													</button>
													{/* Botón secundario */}
													<button
														className="super-btn"
														style={{
															background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",
															fontSize: "1rem",
															fontWeight: 600,
															padding: "0.7rem 1.8rem",
															borderRadius: "1.5rem",
															marginTop: 12,
															marginBottom: 0,
															color: "#fff",
															opacity: 0.85,
															boxShadow: "0 2px 12px 0 #2563eb22",
															outline: "none",
															border: "none",
															letterSpacing: "0.01em"
														}}
														onClick={() => window.open('https://geofiber.com.ar', '_blank')}
														aria-label="¿Qué es GeoFiber TV?"
													>
														¿Qué es GeoFiber TV?
													</button>
							  <InstallPrompt />
								</div>
								{/* Footer minimalista */}
								<footer style={{
									width: "100%",
									maxWidth: 420,
									margin: "24px auto 0 auto",
									textAlign: "center",
									color: "#b3b3b3",
									fontSize: 13,
									opacity: 0.7,
									letterSpacing: 0.1,
									zIndex: 2
								}}>
									<span>© {new Date().getFullYear()} GeoFiber TV · <a href="mailto:soporte@geofiber.com.ar" style={{color: "#38bdf8", textDecoration: "underline"}}>Soporte</a></span>
								</footer>
								<style>{`
									@media (max-width: 600px) {
										.glass-card {
											padding: 1.2rem 0.5rem !important;
											border-radius: 1.2rem !important;
											max-width: 98vw !important;
										}
										.title-main {
											font-size: 1.5rem !important;
										}
									}
									@keyframes glowPulse {
										0% { filter: drop-shadow(0 0 24px #38bdf8cc); }
										100% { filter: drop-shadow(0 0 48px #2563ebcc); }
									}
									@keyframes float0 { 0% { transform: translateY(0); } 100% { transform: translateY(-12px); } }
									@keyframes float1 { 0% { transform: translateY(0); } 100% { transform: translateY(10px); } }
									@keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
								`}</style>
					</div>
		</>
	);
}
