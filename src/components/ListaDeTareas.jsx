import React, { useEffect, useState } from "react";
import TareaFormulario from "./TareaFormulario";
import "../stylesheets/ListaDeTareas.css";
import Tarea from "./Tarea";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import {  getDocs } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";

function ListaDeTareas(props) {
    //lista_tareas();
    const [tareas, setTareas] = useState([]);
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await getDocs(collection(db, "tareas"));
                const arrayData = data.docs.map((doc) => ({
                    id: doc.id,
                    texto: doc.data().tarea_texto,
                    completada: doc.data().tarea_completada,
                }));
                setTareas(arrayData);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerDatos();
    }, []);
    const agregarTarea =async tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
            /* agregando a firebase */
            try {
                const docRef = await addDoc(collection(db, "tareas"), {
                  tarea_id: tarea.id,
                  tarea_texto: tarea.texto,
                  tarea_completada: tarea.completada,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              /* finalizando agregando a firebase */
        }
    };
    const eliminarTarea = async id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        await deleteDoc(doc(db, "tareas", id));
        setTareas(tareasActualizadas);
    };
    const completarTarea =async id => {
        var tmp;
        const tareasActualizadas = tareas.map( tarea => {
            if(tarea.id === id){
                tarea.completada = !tarea.completada;
                tmp = tarea.completada;
            }
            return tarea;
        });
        /* actualizando en firebase */
        try {
            await updateDoc(doc(db, "tareas", id), {
              tarea_completada: tmp,
            });
            console.log("Document successfully updated!");
          }
            catch (e) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", e);
          }
    /* finalizando actualizando en firebase */
        setTareas(tareasActualizadas);
    };
    

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea}></TareaFormulario>
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea)=>
                        <Tarea 
                            key={tarea.id} 
                            id={tarea.id} 
                            texto={tarea.texto} 
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea} 
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;