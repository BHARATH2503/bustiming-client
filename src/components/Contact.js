import "../css/Contact.css"
export default function Contact() {
    return (

        <div class="contact3 py-5">
            <div class="row no-gutters">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card-shadow">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbTGHPgqTjDnIE8lBAEDtvlsjIMJOJg7mJw&usqp=CAU" alt="h"
                                    class="img-container" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-box ml-3">
                                <h1 class="font-weight-light mt-2">Quick Contact</h1>
                                <form class="mt-4" >
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <input class="form-control" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <input class="form-control" type="text" placeholder="City" />
                                            </div>
                                        </div>

                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <textarea class="form-control" rows="3" placeholder="Whether the bus time match our time."></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <button type="button" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="card mt-4 border-0 mb-4">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="card-body d-flex align-items-center c-detail pl-0">
                                            <div class="mr-3 align-self-center">
                                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt="h" />
                                            </div>
                                            <div class="">
                                                <h6 class="font-weight-medium">Address</h6>
                                                <p class="">Kongu Engineering College,
                                                    <br /> Perundurai,Erode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="card-body d-flex align-items-center c-detail">
                                            <div class="mr-3 align-self-center">
                                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" alt="h" />
                                            </div>
                                            <div class="">
                                                <h6 class="font-weight-medium">Phone</h6>
                                                <p class="">251 546 9442
                                                    <br /> 630 446 8851</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="card-body d-flex align-items-center c-detail">
                                            <div class="mr-3 align-self-center">
                                                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="h" />
                                            </div>
                                            <div class="">
                                                <h6 class="font-weight-medium">Email</h6>
                                                <p class="">
                                                    bustime@gmail.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
