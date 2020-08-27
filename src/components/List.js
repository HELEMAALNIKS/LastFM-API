import React from 'react';

const List = ({albumdetails}) => {
    return(
        <table>
            <caption>Resultaten</caption>
                <thead>
                    <tr>
                        <td>Titel:</td>
                        <td>Uitgebracht:</td>
                        <td>Afbeelding:</td>
                    </tr>
                </thead>
                <tbody>
                {albumdetails.map(albumDetail => (
                    <tr>
                        <td>{albumDetail.album.name}</td>
                        <td>{albumDetail.album.wiki.published}</td>
                        <td>
                            <img src={albumDetail.album.image[3]['#text']} alt=""/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
}

export default List;