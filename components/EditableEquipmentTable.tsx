import React, { useState } from 'react';

interface Equipment {
  id: number;
  name: string;
  specs: string;
  quantity: string;
  dailyProduction: string;
}

const initialEquipment: Equipment[] = [
  { id: 1, name: '자동절단기 / TOYO', specs: 'TFC-LL-A', quantity: '1SET', dailyProduction: '50TON' },
  { id: 2, name: '자동절단기 / TOYO', specs: 'TFC-M-A', quantity: '5SET', dailyProduction: '40TON/200TON' },
  // Add the rest of the equipment data here...
];

export default function EditableEquipmentTable() {
  const [equipment, setEquipment] = useState<Equipment[]>(initialEquipment);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = (id: number, field: keyof Equipment, value: string) => {
    setEquipment(equipment.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
    setEditingId(null);
  };

  const handleAdd = () => {
    const newId = Math.max(...equipment.map(e => e.id)) + 1;
    setEquipment([...equipment, { id: newId, name: '', specs: '', quantity: '', dailyProduction: '' }]);
    setEditingId(newId);
  };

  const handleDelete = (id: number) => {
    setEquipment(equipment.filter(item => item.id !== id));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">장비명/제조사</th>
            <th className="py-2 px-4 border-b">규격</th>
            <th className="py-2 px-4 border-b">수량</th>
            <th className="py-2 px-4 border-b">1일/생산량</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map(item => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">
                {editingId === item.id ? (
                  <input
                    value={item.name}
                    onChange={(e) => handleSave(item.id, 'name', e.target.value)}
                    onBlur={() => setEditingId(null)}
                    autoFocus
                  />
                ) : (
                  <span onClick={() => handleEdit(item.id)}>{item.name}</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editingId === item.id ? (
                  <input
                    value={item.specs}
                    onChange={(e) => handleSave(item.id, 'specs', e.target.value)}
                    onBlur={() => setEditingId(null)}
                  />
                ) : (
                  <span onClick={() => handleEdit(item.id)}>{item.specs}</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editingId === item.id ? (
                  <input
                    value={item.quantity}
                    onChange={(e) => handleSave(item.id, 'quantity', e.target.value)}
                    onBlur={() => setEditingId(null)}
                  />
                ) : (
                  <span onClick={() => handleEdit(item.id)}>{item.quantity}</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editingId === item.id ? (
                  <input
                    value={item.dailyProduction}
                    onChange={(e) => handleSave(item.id, 'dailyProduction', e.target.value)}
                    onBlur={() => setEditingId(null)}
                  />
                ) : (
                  <span onClick={() => handleEdit(item.id)}>{item.dailyProduction}</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <button onClick={() => handleDelete(item.id)} className="text-red-500 mr-2">Delete</button>
                {editingId !== item.id && (
                  <button onClick={() => handleEdit(item.id)} className="text-blue-500">Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAdd} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">Add New Equipment</button>
    </div>
  );
}