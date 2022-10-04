import { useState, useEffect } from "react";
import { landingPageData } from "../data/dataLanding";
import { Card } from "./layouts/Card";

export const Notice = () => {
  // console.log(landingPageData.information)

  const [listItems, setListItems] = useState(landingPageData);

  // const dataJson = landingPageData.information;
  // const totalItems = (cardContainer) => {
  //   let resultData = ""
  //   {dataJson.map(({ data}) => {
  //     data.map(({ data }) => {
  //       data.map(({ fields }) => {
  //         fields.forEach(({__id, label, type, value}) => {
  //           {console.log(label)}

  //         });
  //       });
  //     });
  //   })}

  // }
  // useEffect(() => {
  //   dataJson.map(({ data }) => {
  //     data.map(({ data }) => {
  //       data.map(({ fields }) => {
  //         fields.forEach(({ __id, label, type, value }) => {
  //           {
  //             console.log("este es value", value);
  //           }
  //         });
  //       });
  //     });
  //   });
  //   setListItems(dataJson);
  // }, []);

  return (
    <div>
      <Card
        data={listItems._id} />
      <h1>
        {listItems.map(({ data }) => {
          data.map(({ data }) => {
            data.map(({ fields }) => {
              fields.map((carpeta, id) => {
                return (
                  <div key={id}>
                    <Card />
                    <li>{carpeta.name}</li>
                  </div>
                );
              });
            });
          });
        })}
      </h1>
    </div>
  );
};
