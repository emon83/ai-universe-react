import React from "react";

const Modal = (props) => {
  //console.log(props.singleData);
  const { image_link, description, integrations, features } = props.singleData;
  console.log(integrations);
  //console.log(Object.values(features || {} ));
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div class="card lg:card-side bg-base-100 ">
            <div class="card-body border-2 border-error mr-2 rounded-2xl">
              <h2 class="card-title">{description ? description : 'Not found'}</h2>
              <div className="flex justify-between lg:mr-12">
              <div>
                <h2 className="text-xl font-bold">Features</h2>
                {
                  Object.values(features || {}).map((value) =>(
                    <p>{value.feature_name}</p>
                  ))  
                }
              </div>
              <div>
              <h2 className="text-xl font-bold">Integrations</h2>
              {integrations &&
                integrations ? integrations.map((value) =>(
                    <p>{value}</p>
                )) : 'Not Found Data'
              }
              </div>
              </div>
              <p>Add other features here....</p>
            </div>
            <figure className="w-full">
              <img className="w-full h-64" src={image_link && image_link[0]} alt="Album" />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
