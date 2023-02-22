-- cars
INSERT INTO car ("className", "modelName", "basePrice")
VALUES (
        'C-Klasse',
        'Cabriolet',
        45000
    ),(
        'E-Klasse',
        'Limousine',
        43000
    ),(
        'EQB',
        'SUV',
        40000
    ),(
        'G-Klasse',
        'Geländewagen',
        101000
    ),(
        'AMG',
        'Coupé',
        98000
    );

-- color_configurations
INSERT INTO color_configuration ("colorName", "basePrice")
VALUES (
    'rot',
    1000
  ),(
    'grün',
    3000
  ),(
    'silber',
    5000
  ),(
    'schwarz',
    1500
  ),(
    'gelb',
    4000
  );

-- configuration_additionalConfigurations
INSERT INTO additional_configuration ("name", "basePrice")
VALUES (
    'Panoramadach',
    4800
  ),(
    'Lenkradheizung',
    1250
  ),(
    'Leder,',
    9855
  ),(
    'Soundsystem',
    600
  ),(
    'Klimaanlage',
    2199
  );

-- performance_configurations
INSERT INTO performance_configuration ("configName", "power", "basePrice")
VALUES (
    'EQE 300',
    180,
    64617
  ),(
    'EQE 350',
    215,
    68425
  ),(
    'EQE 350 4MATIC',
    215,
    71578
  ),(
    'Mercedes-AMG EQE 43 4MATIC',
    350,
    103970
  ),(
    'Mercedes-AMG EQE 53 4MATIC+',
    460,
    109920
  );