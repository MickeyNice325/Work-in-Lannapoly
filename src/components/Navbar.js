import React from 'react';

function Navbar() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NTM <br></br>HOTEL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">หน้าแรก</a>
                        <a class="nav-link" href="">ติดต่อสอบถามได้ที่</a>
                        <a class="nav-link" href="#">เกี่ยวกับโรงแรม</a>
                        <a class="nav-link" href="#">ช่องทางการติดต่อ</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}
export default Navbar;