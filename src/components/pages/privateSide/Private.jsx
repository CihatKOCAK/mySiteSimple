import React from 'react'
import "./private.scss";

export default function Private() {
    return (
        <div>
            {window.screen.width > 799 && <div className='body-pr'>
                <div class="container-pr">
                    <i class="fa-solid fas fa-heart"></i>
                    <div class="bread">
                        <div class="bottom"></div>
                        <div class="leg"> </div>
                    </div>
                    <div class="jam">
                        <div class="lid"></div>
                        <div class="label">
                            <div class="strawberry"></div>
                            <div class="hand"></div>
                        </div>
                    </div>
                    <h3 className='my-h3'>I loaf you berry much! ❤️</h3>
                </div>
            </div>}
            <div className='papatya'>
                <div class="flower-container">
                    <div class="flower-leaf"></div>
                    <div class="flower-stem"></div>
                    <div class="flower-top">
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-petal"></div>
                        <div class="flower-center"></div>
                    </div>
                    <div class="flower-text" style={{color:"black", fontSize:"25px"}}>I have a very beautiful daisy in my private space, my daisy ❤️</div>
                </div></div>
        </div>
    )
}
