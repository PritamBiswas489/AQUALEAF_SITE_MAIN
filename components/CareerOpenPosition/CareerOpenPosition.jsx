import React, { useEffect } from 'react';
import { useState } from 'react';
import './CareerOpenPosition.scss';
import dynamic from 'next/dynamic';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import InputErrorMsg from '@/components/InputErrorMsg/InputErrorMsg';
import { sendCareerFormData } from '@/helpers/data_utils';
import { toast } from 'react-toastify';
import parse from 'html-react-parser';

const CareerOpenPosition = ({ careerCategoryContent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    resetField,
  } = useForm();
  const [file, setFile] = useState('');

  const [animate, setAnimate] = useState(0);
  useEffect(() => {
    document.addEventListener('click', function (e) {
      var container = document.querySelector('.applyForm');
      var button = document.querySelectorAll('.caseStudy');

      if (!container.contains(e.target)) {
        setAnimate(0);
      }
      Array.from(button).forEach((val) => {
        if (val.contains(e.target)) {
          setAnimate(1);
        }
      });
      e.stopPropagation();
    });
  }, []);
  const handleClick = () => {
    setAnimate(!animate);
  };
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      file,
    };

    const result = await sendCareerFormData(formData);
    if (result.status === 200) {
      toast.success('Thank your for contacting us !');
      reset();
    } else {
      toast.error(result?.error?.message);
    }
  };
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = '';
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };
  const handleFile = async (e) => {
    const file = e.target.files[0];
    const base64File = await getBase64(file);
    if (base64File) {
      setFile(base64File);
    }
  };
  return (
    <>
      <section className="openPosition">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="OpenPositionTitle">
                <h2>Open Position</h2>
              </div>
              <div className="opAccordion">
                <Accordion>
                  {careerCategoryContent.map((val, i) => (
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header>{val.title}</Accordion.Header>
                      <Accordion.Body>
                        <div className="accordionBodyInner">
                          <div>{parse(val?.description ?? `Front-end Development`)}</div>
                          <div className="abiBox mt-4">
                            <a href="javascript:void(0);" className="caseStudy" onClick={handleClick}>
                              Apply
                            </a>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className={animate ? 'applyForm active' : 'applyForm'}>
          <div className="applyFormInner">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Respond to the vacancy</h3>
              {/* <p>IBM Sterling QA Engineer (Poland)</p> */}
              <div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control applyInput" id="floatingInput" placeholder="Full name" {...register('name', { required: 'Name is required' })} />
                  <label htmlFor="floatingInput">Full name</label>
                  {errors.name && <InputErrorMsg error={errors.name?.message} />}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control applyInput"
                    id="floatingInput"
                    placeholder="Phone Number"
                    {...register('ph_no', { required: 'Phone No is required' })}
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                  {errors.ph_no && <InputErrorMsg error={errors.ph_no?.message} />}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control applyInput"
                    id="floatingInput"
                    placeholder="name@example.com"
                    {...register('email', { required: 'Email is required' })}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                  {errors.email && <InputErrorMsg error={errors.email?.message} />}
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control applyInput applyTextarea"
                    id="comment"
                    name="message"
                    placeholder="Message goes here"
                    {...register('message', { required: 'Message is required' })}
                  />
                  <label htmlFor="comment">Message</label>
                  {errors.message && <InputErrorMsg error={errors.message?.message} />}
                </div>

                <div className="form-floating mb-3">
                  <select className="form-select" {...register('state', { required: 'State is required' })}>
                    <option value={''}>--Select--</option>
                    <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
                    <option value="ASSAM">ASSAM</option>
                    <option value="ARUNACHAL PRADESH">ARUNACHAL PRADESH</option>
                    <option value="BIHAR">BIHAR</option>
                    <option value="GUJRAT">GUJRAT</option>
                    <option value="HARYANA">HARYANA</option>
                    <option value="HIMACHAL PRADESH">HIMACHAL PRADESH</option>
                    <option value="JAMMU & KASHMIR">JAMMU & KASHMIR</option>
                    <option value="KARNATAKA">KARNATAKA</option>
                    <option value="KERALA">KERALA</option>
                    <option value="MADHYA PRADESH">MADHYA PRADESH</option>
                    <option value="MAHARASHTRA">MAHARASHTRA</option>
                    <option value="MANIPUR">MANIPUR</option>
                    <option value="MEGHALAYA">MEGHALAYA</option>
                    <option value="MIZORAM">MIZORAM</option>
                    <option value="NAGALAND">NAGALAND</option>
                    <option value="ORISSA">ORISSA</option>
                    <option value="PUNJAB">PUNJAB</option>
                    <option value="RAJASTHAN">RAJASTHAN</option>
                    <option value="SIKKIM">SIKKIM</option>
                    <option value="TAMIL NADU">TAMIL NADU</option>
                    <option value="TRIPURA">TRIPURA</option>
                    <option value="UTTAR PRADESH">UTTAR PRADESH</option>
                    <option value="WEST BENGAL">WEST BENGAL</option>
                    <option value="DELHI">DELHI</option>
                    <option value="GOA">GOA</option>
                    <option value="PONDICHERY">PONDICHERY</option>
                    <option value="LAKSHDWEEP">LAKSHDWEEP</option>
                    <option value="DAMAN & DIU">DAMAN & DIU</option>
                    <option value="DADRA & NAGAR">DADRA & NAGAR</option>
                    <option value="CHANDIGARH">CHANDIGARH</option>
                    <option value="ANDAMAN & NICOBAR">ANDAMAN & NICOBAR</option>
                    <option value="UTTARANCHAL">UTTARANCHAL</option>
                    <option value="JHARKHAND">JHARKHAND</option>
                    <option value="CHATTISGARH">CHATTISGARH</option>
                  </select>
                  <label htmlFor="comment">State</label>
                  {errors.state && <InputErrorMsg error={errors.state?.message} />}
                </div>

                <div className="form-floating mb-3">
                  <select className="form-select" {...register('experience', { required: 'Experience is required' })}>
                    <option value={''}>--Select--</option>
                    <option value="Less than 1"> {'< 1 year'}</option>
                    <option value="1"> {'1 year'}</option>
                    <option value="2"> {'2 year'}</option>
                    <option value="3"> {'3 year'}</option>
                    <option value="4"> {'4 year'}</option>
                    <option value="5"> {'5 year'}</option>
                    <option value="6"> {'6 year'}</option>
                    <option value="7"> {'7 year'}</option>
                    <option value="8"> {'8 year'}</option>
                    <option value="9"> {'9 year'}</option>
                    <option value="10+"> {'10+ year'}</option>
                  </select>
                  <label htmlFor="comment">Experience</label>
                  {errors.experience && <InputErrorMsg error={errors.experience?.message} />}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control applyInput"
                    id="floatingInput"
                    placeholder="Current CTC"
                    {...register('current_ctc', { required: 'Current CTC is required' })}
                  />
                  <label htmlFor="floatingInput">Current CTC</label>
                  {errors.current_ctc && <InputErrorMsg error={errors.current_ctc?.message} />}
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control applyInput"
                    id="floatingInput"
                    placeholder="Expected CTC"
                    {...register('expected_ctc', { required: 'Expected CTC is required' })}
                  />
                  <label htmlFor="floatingInput">Expected CTC</label>
                  {errors.expected_ctc && <InputErrorMsg error={errors.expected_ctc?.message} />}
                </div>

                <div className="file-upload mb-4">
                  <div className="file-select">
                    <div className="file-select-button" id="fileName">
                      Choose File
                    </div>
                    <div className="file-select-name" id="noFile">
                      No file chosen...
                    </div>
                    <input type="file" name="chooseFile" id="chooseFile" onChange={handleFile} />
                  </div>
                </div>
                <div className="relative">
                  <button type="submit" class="sendBtn">
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Link href="javascript:void(0);" className="consHolClose" onClick={handleClick}>
            <i className="fas fa-times"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CareerOpenPosition;
