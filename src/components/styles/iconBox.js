import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .icon-box-area {
        padding-bottom: 80px;

        .full-icon-box {
            position: relative;

            .icon-box {
                position  : absolute;
                top       : -20px;
                left      : 0;
                width     : 100%;
                background: #fff;
                padding   : 35px 20px 20px;
                z-index   : 9;
                box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                border-radius : 5px;
                flex-direction: column;
                .box-icon {
                    height      : 36px;
                    text-align  : center;
                    margin-right: 20px;
                    position    : relative;
                    object-fit: contain;
                    img{
                        width:80px;
                        position : absolute;
                        top:0;
                        right:0;
                        
                    }


                 

                   
                    @media(max-width: 991px) {
                        height: 22px;
                        margin-right: 10px;
                    }

                    @media(max-width: 767px) {
                        height: 36px;
                        margin-right: 20px;
                    }
                }

                .box-icon.box1 {

                    &:before {
                        border-bottom-color: ${colors.red};
                    }

                    &:after {
                        border-top-color: ${colors.red};
                    }
                }

                .box-icon.box2 {
                   
                    &:before {
                        border-bottom-color: ${colors.purple};
                    }

                    &:after {
                        border-top-color: ${colors.purple};
                    }
                }

                .box-icon.box3 {
                    background: ${colors.blue};

                    &:before {
                        border-bottom-color: ${colors.blue};
                    }

                    &:after {
                        border-top-color: ${colors.blue};
                    }
                }

                .box-title {
                    margin-top: -15px;

                    h6 {
                        color         : ${colors.black1};
                        text-transform: uppercase;
                        font-weight   : 600;
                        margin-bottom : 6px;

                        @media(max-width: 991px) {
                            font-size: 14px;
                            letter-spacing: 0;
                        }

                        @media(max-width: 767px) {
                            font-size: 16px;
                            letter-spacing: 0.3px;
                        }
                    }

                    p {
                        font-size: 14px;
                        color    : ${colors.text3};

                        @media(max-width: 991px) {
                            font-size: 13px;
                        }

                        @media(max-width: 767px) {
                            font-size: 14px;
                        }
                    }
                }

                @media(max-width: 991px) {
                    padding: 25px 10px 8px;
                }

                @media(max-width: 767px) {
                    padding: 35px 20px;
                    position: unset;
                    margin-bottom: 25px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0 0;
        }
    }
`;