import React from 'react';
import GShopSearch from './gshop-search';

function GShopHome(props) {
  return (
    <div>
      <GShopSearch wishListId={props.match.params.id} />
    </div>
  );
}

export default GShopHome;
