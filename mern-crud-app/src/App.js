 // client/src/App.js
/*import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({ name: newItem });
    setItems([...items, response.data]);
    setNewItem('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, { name: item.name });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  const handleEditChange = (e, item) => {
    setItems(items.map(i => i._id === item._id ? { ...i, name: e.target.value } : i));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {editingItem === item._id ? (
              <div>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleEditChange(e, item)}
                />
                <button onClick={() => handleUpdateItem(item)}>Save</button>
              </div>
            ) : (
              <span>{item.name}</span>
            )}
            {editingItem === item._id ? (
              <button onClick={() => setEditingItem(null)}>Cancel</button>
            ) : (
              <button onClick={() => setEditingItem(item._id)}>Edit</button>
            )}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;*/
/*import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ eid: '', ename: '', eage: '', edob: '', email: '' });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem(newItem);
    setItems([...items, response.data]);
    setNewItem({ eid: '', ename: '', eage: '', edob: '', email: '' });
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, item);
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleEditChange = (e, item) => {
    const { name, value } = e.target;
    setItems(items.map(i => i._id === item._id ? { ...i, [name]: value } : i));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <input
          type="text"
          name="eid"
          value={newItem.eid}
          onChange={handleInputChange}
          placeholder="Enter ID"
        />
        <input
          type="text"
          name="ename"
          value={newItem.ename}
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="eage"
          value={newItem.eage}
          onChange={handleInputChange}
          placeholder="Enter Age"
        />
        <input
          type="date"
          name="edob"
          value={newItem.edob}
          onChange={handleInputChange}
          placeholder="Enter Date of Birth"
        />
        <input
          type="email"
          name="email"
          value={newItem.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              {editingItem === item._id ? (
                <>
                  <td><input type="text" name="eid" value={item.eid} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="text" name="ename" value={item.ename} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="number" name="eage" value={item.eage} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="date" name="edob" value={item.edob} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="email" name="email" value={item.email} onChange={(e) => handleEditChange(e, item)} /></td>
                </>
              ) : (
                <>
                  <td>{item.eid}</td>
                  <td>{item.ename}</td>
                  <td>{item.eage}</td>
                  <td>{item.edob}</td>
                  <td>{item.email}</td>
                </>
              )}
              <td>
                {editingItem === item._id ? (
                  <>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item._id)}>Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

export default App;*/
/*import './App.css';
import * as Icon from 'react-bootstrap-icons';

import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ eid: '', ename: '', eage: '', edob: '', email: '' });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    if (newItem.eid && newItem.ename && newItem.eage && newItem.edob && newItem.email) {
      const response = await addItem(newItem);
      setItems([...items, response.data]);
      setNewItem({ eid: '', ename: '', eage: '', edob: '', email: '' });
    } else {
      alert('Please fill all fields');
    }
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, item);
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleEditChange = (e, item) => {
    const { name, value } = e.target;
    setItems(items.map(i => i._id === item._id ? { ...i, [name]: value } : i));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <input
          type="text"
          name="eid"
          value={newItem.eid}
          onChange={handleInputChange}
          placeholder="Enter ID"
        />
        
        <input
          type="text"
          name="ename"
          value={newItem.ename}
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="eage"
          value={newItem.eage}
          onChange={handleInputChange}
          placeholder="Enter Age"
        />
        <input
          type="date"
          name="edob"
          value={newItem.edob}
          onChange={handleInputChange}
          placeholder="Enter Date of Birth"
        />
        <input
          type="email"
          name="email"
          value={newItem.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <table className="Meena" border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' , backgroundcolor: 'sienna'
}}>
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              {editingItem === item._id ? (
                <>
                  <td><input type="text" name="eid" value={item.eid} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="text" name="ename" value={item.ename} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="number" name="eage" value={item.eage} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="date" name="edob" value={item.edob} onChange={(e) => handleEditChange(e, item)} /></td>
                  <td><input type="email" name="email" value={item.email} onChange={(e) => handleEditChange(e, item)} /></td>
                </>
              ) : (
                <>
                  <td>{item.eid}</td>
                  <td>{item.ename}</td>
                  <td>{item.eage}</td>
                  <td>{item.edob}</td>
                  <td>{item.email}</td>
                </>
              )}
              <td>
                {editingItem === item._id ? (
                  <>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item._id)}> <Icon.PencilSquare /></button>
                    <button onClick={() => handleDeleteItem(item._id)}><Icon.ArchiveFill /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;*/



import './App.css';
import * as Icon from 'react-bootstrap-icons';

import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ eid: '', ename: '', eage: '', edob: '', email: '' });
  const [editingItem, setEditingItem] = useState(null);

useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem(newItem);
    setItems([...items, response.data]);
    setNewItem({ eid: '', ename: '', eage: '', edob: '', email: '' });
  
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, { name: item.name });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };


  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <input
          type="text"
          name="eid"
          value={newItem.eid}
          onChange={(e) => setNewItem({ ...newItem, eid: e.target.value })}
          placeholder="Enter ID"
        />
        
        <input
          type="text"
          name="ename"
          value={newItem.ename}
          onChange={(e) => setNewItem({ ...newItem, ename: e.target.value })}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="eage"
          value={newItem.eage}
          onChange={(e) => setNewItem({ ...newItem, eage: e.target.value })}
          placeholder="Enter Age"
        />
        <input
          type="date"
          name="edob"
          value={newItem.edob}
          onChange={(e) => setNewItem({ ...newItem, edob: e.target.value })}
          placeholder="Enter Date of Birth"
        />
        <input
          type="email"
          name="email"
          value={newItem.email}
          onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
          placeholder="Enter Email"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <table className="Meena" border="1" style={{ width: '90%', marginTop: '20px', borderCollapse: 'collapse',marginLeft: '67px' , backgroundcolor: 'sienna'
}}>
      <thead>
          <tr style={{ color: 'MidnightBlue', backgroundColor: '' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              {editingItem === item._id ? (
                <>
                  <td><input type="text"  value={item.eid} onChange={(e) => setItems(items.map((i) => (i._id === item._id ? { ...i, eid: e.target.value } : i)))} /></td>
                  <td><input type="text"  value={item.ename} onChange={(e) => setItems(items.map((i) => (i._id === item._id ? { ...i, ename: e.target.value } : i)))} /></td>
                  <td><input type="number"  value={item.eage} onChange={(e) => setItems(items.map((i) => (i._id === item._id ? { ...i, eage: e.target.value } : i)))} /></td>
                  <td><input type="date"  value={item.edob} onChange={(e) => setItems(items.map((i) => (i._id === item._id ? { ...i, edob: e.target.value } : i)))} /></td>
                  <td><input type="email"  value={item.email} onChange={(e) => setItems(items.map((i) => (i._id === item._id ? { ...i, email: e.target.value } : i)))} /></td>
                </>
              ) : (
                <>
                  <td>{item.eid}</td>
                  <td>{item.ename}</td>
                  <td>{item.eage}</td>
                  <td>{item.edob}</td>
                  <td>{item.email}</td>
                </>
              )}
              <td>
                {editingItem === item._id ? (
                  <>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditingItem(item._id)}> <Icon.PencilSquare /></button>
                    <button onClick={() => handleDeleteItem(item._id)}><Icon.ArchiveFill /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;