
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Room() {
  return (
    <div className="container mt-5">
      {/* Row for Room and Map */}
      <div className="row">
        {/* Room Card */}
        <div className="col-lg-8">
          <div className="card mb-3 w-100 rounded-top-4">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-navbar rounded-top-3">
              <div className="container-fluid">
                <div className="navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-5">
                    <li className="nav-item"><a className="nav-link" href="#">รีวิว</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">ห้อง</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">เพิ่มเติม</a></li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* Card Content */}
            {[4, 5, 6].map((num, index) => (
              <div className="row g-0 w-100 roombg" key={index}>
                <div className="col-md-4 mt-4 mb-4">
                  <img
                    src={`/img/${num}.jpg`}
                    className="img-fluid rounded-start"
                    alt="Room Image"
                  />
                </div>
                <div className="col">
                  <div className="card-body text-start">
                    <p className="card-text">เป็นโรงแรมที่ดีมากเลย รักเลยมีวิวที่ดีสบายพักผ่อนได้อย่างเต็มที่</p>
                    <h6 className="card-text">ขนาดห้อง 50 ตร.ม</h6>
                    <h6 className="card-text">Wifi ตลอด เวลา</h6>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <p className="rating mb-0">คะแนน: ★★★★★</p>
                      <Link to="/room1" className="btn btn-danger w-25">เข้าสู่</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Card */}
        <div className="col-lg-4">
          <div className="card map-card">
            <div className="card-body bg-navbar text-light">
              <p className="h2 text-center"><strong>แผนที่ ที่อยู่ของโรงแรม</strong></p>
              <img src="/img/map.jpg" className="img-fluid mb-3" alt="Map" />
              <p className="text-start"><strong>ที่อยู่</strong><br />1234 ถนน ตัวอย่าง, เชียงใหม่</p>
              <p className="text-start"><strong>คะแนนโดยรวม</strong><br />8.5 คะแนน</p>
              <p className="text-start"><strong>มี WiFi ให้ตลอด 24 ชม.</strong></p>
              <p className="text-start"><strong>มีห้องนอนทุกขนาด ตั้งแต่ 40 ตร.ม.ไปจนถึง 100 ตร.ม.</strong></p>
              <p className="text-start"><strong>มีปัญหาสอบถามที่</strong><br />
                ● พนักงาน<br />
                ● ติดต่อ 090-999-0000
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function Room1() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Room 1</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/room1" element={<Room1 />} />
      </Routes>
    </Router>
  );
}

export default App;