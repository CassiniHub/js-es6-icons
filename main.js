// Taking data functions

function getIconsDb() {
    return [
      {
        name: "cat",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "crow",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dove",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "horse",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "user-astronaut",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-graduate",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-ninja",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-secret",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
    ];
}

function getColors() {
      
    return ["blue", "orange", "purple", "rose", "red"]
}

function print(array) {
    
    const container = $('.icons');
    
    array.forEach(item => {
        
        const iconHtml = `
            <div>
                <i class="${item.family} ${item.prefix}${item.name}" style="color:blue"></i>
                <div class="title">${item.name.toUpperCase()}</div>
            </div>
        `;
       
        container.append(iconHtml);
    });
}
function init() {
    
    // Milestone 1
    // Partendo dalla seguente struttura dati , mostriamo
    //in pagina tutte le icone disponibili come da layout.

    const icons  = getIconsDb();
    const colors = getColors();

    print(icons);

    // - - - - - - - - - - - - - - 

    // Milestone 2
    // Coloriamo le icone per tipo
    
    // - - - - - - - - - - - - - - 

    // Milestone 3
    // Creiamo una select con i tipi di icone e usiamola per filtrare le icone
    

}

$(init);