
const { updateTemperatures } = require('./dashboard');

test('Green when all temperatures are within threshold', () => {
    let device = document.createElement('div');
    device.id = 'ori-cm-bush';
    document.body.appendChild(device);

    updateTemperatures(25, 27, 28);

    expect(device.className).toBe('device green');
});

test('Yellow when any temperature crosses high threshold', () => {
    let device = document.createElement('div');
    device.id = 'ori-cm-bush';
    document.body.appendChild(device);

    updateTemperatures(25, 35, 28);

    expect(device.className).toBe('device yellow');
});

test('Red when any temperature crosses hotspot threshold', () => {
    let device = document.createElement('div');
    device.id = 'ori-cm-bush';
    document.body.appendChild(device);

    updateTemperatures(25, 27, 40);

    expect(device.className).toBe('device red');
});
