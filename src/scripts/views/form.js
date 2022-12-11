const forma = {
  async render() {
    return `
    <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Input Buku</h5>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="inputBookId">ID Buku</label>
            <input id="inputBookId" type="number" class="form-control" placeholder="ID Buku">
          </div>
          <div class="form-group">
            <label for="inputBookTitle">Judul Buku</label>
            <input id="inputBookTitle" type="text" class="form-control" placeholder="Judul Buku">
          </div>
          <div class="form-group">
            <label for="inputBookAuthor">Pengarang</label>
            <input id="inputBookAuthor" type="text" class="form-control" placeholder="Pengarang">
          </div>
          <div class="form-group">
            <button id="buttonSave" class="btn btn-success">Save</button>
            <button id="buttonUpdate" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div id="listBook" class="row">tessss</div>
  <script>
  
  </script>
    
    

      `;
  },

  async afterRender() {
    function main() {
      const baseUrl = 'https://satupersen2.herokuapp.com/api/reviews';

      const getBook = async () => {
        try {
          const response = await fetch(`${baseUrl}`);
          const responseJson = await response.json();

          if (responseJson.error) {
            showResponseMessage(responseJson.message);
          } else {
            renderAllBooks(responseJson.data);
          }
        } catch (error) {
          showResponseMessage(error);
        }
      };

      const insertBook = async (book) => {
        try {
          const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                reviewer: book.title,
                reviews: book.author,
              },
            }),
          };

          const response = await fetch(`${baseUrl}`, options);
          const responseJson = await response.json();
          showResponseMessage(responseJson.message);
          getBook();
        } catch (error) {
          showResponseMessage(error);
        }
      };

      const updateBook = async (book) => {
        try {
          const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: {
                reviewer: book.title,
                reviews: book.author,
              },
            }),
          };

          const response = await fetch(`${baseUrl}/${book.id}`, options);
          const responseJson = await response.json();

          showResponseMessage(responseJson.message);
          getBook();
        } catch (error) {
          showResponseMessage(error);
        }
      };

      const removeBook = async (book) => {
        try {
          const options = {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: book.id }),
          };

          const response = await fetch(`${baseUrl}/${book.id}`, options);
          const responseJson = await response.json();

          showResponseMessage(responseJson.message);
          getBook();
        } catch (error) {
          showResponseMessage(error);
        }
      };

      /*
              jangan ubah kode di bawah ini ya!
          */

      const renderAllBooks = (data) => {
        const listBookElement = document.querySelector('#listBook');
        listBookElement.innerHTML = '';

        data.forEach((book) => {
          listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                  <div class="card">
                    <div class="card-body">
                      <h5>(${book.id}) ${book.attributes.reviewer}</h5>
                      <p>${book.attributes.reviews}</p>
                      <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                    </div>
                  </div>
                </div>
              `;
        });

        const buttons = document.querySelectorAll('.button-delete');
        buttons.forEach((button) => {
          button.addEventListener('click', (event) => {
            const bookId = event.target.id;

            removeBook(bookId);
          });
        });
      };

      const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
      };

      document.addEventListener('DOMContentLoaded', () => {
        const inputBookId = document.querySelector('#inputBookId');
        const inputBookTitle = document.querySelector('#inputBookTitle');
        const inputBookAuthor = document.querySelector('#inputBookAuthor');
        const buttonSave = document.querySelector('#buttonSave');
        const buttonUpdate = document.querySelector('#buttonUpdate');

        buttonSave.addEventListener('click', function () {
          const book = {
            id: Number.parseInt(inputBookId.value),
            title: inputBookTitle.value,
            author: inputBookAuthor.value,
          };

          insertBook(book);
        });

        buttonUpdate.addEventListener('click', function () {
          const book = {
            id: Number.parseInt(inputBookId.value),
            title: inputBookTitle.value,
            author: inputBookAuthor.value,
          };

          updateBook(book);
        });
        getBook();
      });
    }
    main();
  },
};

export default forma;
